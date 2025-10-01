
import Card from "./Card"

const Calendar = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4 ">
                <Card title={"Calendar"} />
                <Card title={"Calendar"} />
                <Card title={"Calendar"} />
            </div>
        </>
    )
}
export default Calendar