import React from "react";
import '../App.css';
import SubContents from './SubContents';
import Advertisement from "./Advertisement";

function Main() {
    return (
        <div className="Main">
            <div class="row">
                <SubContents />
                <SubContents />
                <SubContents />
                <Advertisement />
            </div>
        </div>
    )

}

export default Main;