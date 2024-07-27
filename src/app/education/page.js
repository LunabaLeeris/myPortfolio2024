import EducCard from "./education"
import educ from "./education.json"

export default function Educ() {
    return (
        <div className="flex flex-col items-center gap-10">
            <h1 className="text-white mt-16 text-2xl w-full text-center mb-1">Education</h1>
            {
                Object.keys(educ).map((t, i) =>
                    <EducCard key={i} title={t} 
                school={educ[t]["School"]} duration={educ[t]["Duration"]} sentences={educ[t]["Sentences"]}></EducCard>)
            }
        </div>
    )
}