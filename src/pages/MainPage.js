import * as tf from "@tensorflow/tfjs";

import makeModel  from '../ml/Model';

import Navbar from "../components/ToolBar";
import Desk from "../components/Desk";

const MainPage = () => {
    // const my_tenosr = tf.tensor([1, 2,3,4])

    // const model = makeModel()

    return (
        <> 
            <Navbar/>
            <div className="container">
                <Desk/>
            </div>
            
        </>
    )
}

export default MainPage