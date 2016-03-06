(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.split = function(string, splitter, output) {
      output = string.split(splitter)
    }
  
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
          [" ", "split %s by %s, output to %m.lists", ""]
        ]
    };

    // Register the extension
    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
