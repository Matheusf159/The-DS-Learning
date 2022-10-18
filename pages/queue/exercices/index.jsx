import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
import NavStructMenu from "../../../components/NavStructMenu";
import { exercices } from '../../../components/QueueComponents/QueueExercicies'
import { Container, Row, Col } from "reactstrap";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { methods } from "../../../components/stacksComponents/methods";
import styles from '../../../styles/Exercices.module.css'

export default function QuestionsQueue() {
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

QuestionsQueue.getLayout = function getLayout(page) {
    return (
        <Layout pageTitle="DS-Learning | Fila">
            <Sidebar />
            <section>
                <NavStructMenu
                    structName="PILHA"
                    iconName={faLayerGroup}
                    linkStruct="/queue"
                    linkVisualization="/queue/visualization"
                    linkExercicio="/queue/exercices"
                    methods={methods}
                />
                {page}
            </section>
        </Layout>
    )
}