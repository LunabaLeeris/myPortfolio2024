import ExpCard from "./exp"
import exp from "./exp.json"

export default function Exp() {
    return (
        <div className="flex flex-col items-center gap-10">
            <h1 className="text-white mt-16 text-2xl w-full text-center mb-1">EXPERIENCE</h1>
            {
                Object.keys(exp).map((t, i) =>
                    <ExpCard key={i} title={t} 
                companies={exp[t]["Companies"]} duration={exp[t]["Duration"]} sentences={exp[t]["Sentences"]}></ExpCard>)
            }
        </div>
    )
}