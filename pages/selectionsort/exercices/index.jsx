import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
import NavStructMenu from "../../../components/NavStructMenu";
import { exercices } from '../../../components/SelectionSortComponents/SelectionSortExercicies'
import { Container } from "reactstrap";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import styles from '../../../styles/Exercices.module.css'

export default function QuestionsSelectionSort() {
    return (
        <Container>
            {
                exercices.map((e) => (
                    <div className={styles.container} key={e.question}>
                        <p className={styles.question}>{e.question}) {e.statement}</p>
                        <p className={styles.example}>{e.example}</p>
                    </div>
                ))
            }
        </Container>
    )
}

QuestionsSelectionSort.getLayout = function getLayout(page) {
    return (
        <Layout pageTitle="DS-Learning | SelectionSort">
            <Sidebar />
            <section>
                <NavStructMenu
                    structName="SELECTIONSORT"
                    iconName={faSignal}
                    linkStruct="selectionSort"
                    linkVisualization="selectionSort/visualization"
                    linkExercicio="selectionSort/exercices"
                />
                {page}
            </section>
        </Layout>
    )
}