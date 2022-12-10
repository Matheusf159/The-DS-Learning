import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
import NavStructMenu from "../../../components/NavStructMenu";
import { exercices } from '../../../components/LinkedListComponents/LinkedListExercices'
import { Container } from "reactstrap";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import styles from '../../../styles/Exercices.module.css'
import { methods } from "../../../components/LinkedListComponents/methods";

export default function QuestionsLinkedList() {
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

QuestionsLinkedList.getLayout = function getLayout(page) {
    return (
        <Layout pageTitle="DS-Learning | Lista Encadeada">
            <Sidebar />
            <section>
                <NavStructMenu
                    structName="LISTA ENCADEADA"
                    iconName={faEllipsis}
                    linkStruct="linkedList"
                    linkVisualization="linkedList/visualization"
                    linkExercicio="linkedList/exercices"
                    methods={methods}
                />
                {page}
            </section>
        </Layout>
    )
}