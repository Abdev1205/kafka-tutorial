import kafka from "./kafka.config.js";

async function init() {
  try {
    const admin = await kafka.admin();
    console.log("Connecting to admin\n");
    await admin.connect();
    console.log("Aadmin is now connected\n");

    // now we have to create a topic using admin 
    console.log("Creatiing Topic [riders-updates]\n");
    await admin.createTopics({
      topics: [
        {
          topic: "riders-updates",
          numPartitions: 3,
        }
      ]
    });
    console.log("Created Topic [riders-updates]\n");
    console.log("Disconnecting admin \n");
    await admin.disconnect();
    console.log("Admin is now disconnected\n");
  } catch (error) {
    console.log("Some error have occurred", error.message)
  }
}

init()