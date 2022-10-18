import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
import NavStructMenu from "../../../components/NavStructMenu";
import { exercices } from '../../../components/stacksComponents/StackExercices'
import { Container, Row, Col } from "reactstrap";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { methods } from "../../../components/stacksComponents/methods";
import styles from '../../../styles/Exercices.module.css'

export default function QuestionsStack() {
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

QuestionsStack.getLayout = function getLayout(page) {
    return (
        <Layout pageTitle="DS-Learning | Pilha">
            <Sidebar />
            <section>
                <NavStructMenu
                    structName="PILHA"
                    iconName={faLayerGroup}
                    linkStruct="/stack"
                    linkVisualization="/stack/visualization"
                    linkExercicio="/stack/exercices"
                    methods={methods}
                />
                {page}
            </section>
        </Layout>
    )
}