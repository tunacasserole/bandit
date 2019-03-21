// Log File Structure
// This log should be in a machine friendly format (e.g. CSV, TSV, JSON, YAML, etc).

// attributes for => Process start
// Timestamp of start time
// Username that started the process
// Process name
// Process command line
// Process ID

// attributes for => File creation, modification, deletion
// Process ID
// Process name that created/modified/deleted the file
// Process command line
// Username that started the process that created/modified/deleted the file
// Timestamp of activity
// Full path to the file
// Activity descriptor - e.g. create, modified, delete

// attributes for => Network connection and data transmission
// Timestamp of activity
// Username that started the process that initiated the network activity
// Destination address and port
// Source address and port
// Amount of data sent
// Protocol of data sent
// Process name
// Process command line
// Process ID

// ******** Consolidated LogFile Structure **********
// pid: Process ID
// processName: Process name
// command: Process command line
// userName: Username that started the process that started the activity
// timestamp: Timestamp of activity
// description: Activity Descriptor
// fileName: Path to file
// sourceAddress: Source address
// sourcePort: Source port
// destinationAddress: Destination address
// destinationPort: Destination port
// dataSent: Amount of data sent
// dataProtocol: Protocol of data sent

module.exports.writeActivity = function(activity) {
  var log4js = require("log4js");
  var logger = log4js.getLogger();
  logger.level = "debug";
  logger.debug(JSON.stringify(activity));
};

// TODO: add support for csv stream writing
module.exports.csvWriter = function() {
  const createCsvWriter = require("csv-writer").createObjectCsvWriter;
  const csvWriter = createCsvWriter({
    path: "bandit-log.csv",
    header: [
      { id: "pid", title: "Process ID" },
      { id: "processName", title: "Process name" },
      { id: "command", title: "Command line issued" },
      { id: "username", title: "Initiated by" },
      { id: "timestamp", title: "Timestamp of activity" },
      { id: "description", title: "Activity descriptor" },
      { id: "fileName", title: "Path to file" },
      { id: "sourceAddress", title: "Source address" },
      { id: "sourcePort", title: "Source port" },
      { id: "destinationAddress", title: "Destination address" },
      { id: "destinationPort", title: "Destination port" },
      { id: "dataSent", title: "Data sent" },
      { id: "dataProtocol", title: "Protocol" }
    ]
  });
  return csvWriter;
};
