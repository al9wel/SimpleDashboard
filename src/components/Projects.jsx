import Card from "./Card"

const Projects = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4 ">
                <Card title={"Projects"} />
                <Card title={"Projects"} />
                <Card title={"Projects"} />
            </div>
        </>
    )
}
export default Projects