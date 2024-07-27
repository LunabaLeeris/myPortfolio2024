import AchCard from "./achievement"
import achievement from "./achievement.json"

export default function Exp() {
    return (
        <div className="flex flex-col items-center gap-10">
            <h1 className="text-white mt-16 text-2xl w-full text-center mb-1">ACHIEVEMENTS</h1>
            {
                Object.keys(achievement).map((t, i) =>
                    <AchCard key={i} title={t} sentences={achievement[t]["Sentences"]}></AchCard>)
            }
        </div>
    )
}