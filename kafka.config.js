import { Kafka } from "kafkajs";


const kafka = new Kafka({
  clientId: 'my-app', // just normal any name 
  // broker : broker means we have to pass the ip address of the kafk
  brokers: ['172.25.230.11:9092']
})

export default kafka;