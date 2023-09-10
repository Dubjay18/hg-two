/**
 * Logs the given data along with the current time and severity level.
 * @param {*} data - The data to be logged.
 * @param {string} [severity="Normal"] - The severity level of the log.
 */
const JLogger = (data, severity = "Normal") => {
  const currentTime = new Date();
  const formattedTime = `${currentTime.toLocaleDateString()} ${currentTime.toLocaleTimeString()}`;
  console.log(`[${formattedTime}] [${severity}]`);
  console.log(
    data?.toString() ?? "Error: data not passed to logger"
  );
  console.log("<-arigato");
};

module.exports = JLogger;
