module.exports = {
    postMessage: function (req, res) {
      console.log("post received");
      console.dir(req.body);
      console.log("time from post: " + req.body.time);
      
      ///add to kafka queue///

      

      res.status(201);
      res.send("post received");
    }
}
