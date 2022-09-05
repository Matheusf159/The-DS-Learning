import React from "react";
import Layout from "../../../components/Layout";
import NavStructMenu from "../../../components/NavStructMenu";
import Sidebar from "../../../components/Sidebar";
import { faSignal } from "@fortawesome/free-solid-svg-icons"

export default function BubbleSortInterative() {
    return (
        <div>
            <h1>
                BUBBLE INTERATIVE
            </h1>
        </div>
    )
}

BubbleSortInterative.getLayout = function getLayout(page) {
    return (
       <Layout pageTitle="DS-Learning | BubbleSort">
           <Sidebar />
           <section>
               <NavStructMenu 
                   structName="BUBBLESORT"
                   iconName={faSignal}
                   linkStruct="/bubblesort"
                   linkVisualization="/bubblesort/visualization"
                   linkExercicio="/bubblesort/exercicio"
               />
               {page}
           </section>
       </Layout>
   )
}