import * as tf from "@tensorflow/tfjs"
// import * as dfd from "danfojs-node"
// import { LinearRegression, setBackend } from 'scikitjs'
    

const makeModel = async() => {
    const model = tf.sequential();
    // model.add(tf.layers.dense({units: 32, inputShape: [50]}));
    // model.add(tf.layers.dense({units: 4}));
    // console.log(JSON.stringify(model.outputs[0].shape))

    // const x = tf.input({shape: [32]});
    // const y = tf.layers.dense({units: 3, activation: 'softmax'}).apply(x);
    // const model = tf.model({inputs: x, outputs: y});
    // model.predict(tf.ones([2, 50])).print();



        

    // Perform a linear regression
    // let X = [
    // [2, 3],
    // [1, 4],
    // [5, 7]
    // ]
    // let y = [10, 14, 20]

    // let lr = new LinearRegression()
    // await lr.fit(X, y)
    // console.log(lr.coef)

}

export default makeModel