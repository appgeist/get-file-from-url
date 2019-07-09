const { createWriteStream, unlinkSync } = require('fs');

/**
 * Download a file from a specified URL
 *
 * @param {Object} options
 * @param {string} options.url URL to download from
 * @param {string} options.file Local file name
 * @returns {Promise<string>} A Promise that resolves with the local file name upon download completion
 */
module.exports = ({ url, file }) =>
  new Promise((resolve, reject) => {
    const stream = createWriteStream(file);

    const rejectWithError = (err) => {
      try {
        unlinkSync(file);
        reject(err);
      } catch (unlinkErr) {
        reject(unlinkErr);
      }
    };

    try {
      require(url.startsWith('https') ? 'https' : 'http')
        .get(url, (response) => {
          if (response.statusCode !== 200) {
            rejectWithError(new Error(response.statusCode));
            return;
          }
          response.pipe(stream);
          stream.on('finish', () => {
            stream.close(() => {
              resolve(file);
            });
          });
        })
        .on('error', rejectWithError);
    } catch (err) {
      rejectWithError(err);
    }
  });
