export default function AchCard({ title, sentences }) {
    return (
        <div className="w-11/12 md:w-9/12">
            <div className="text-white flex flex-row justify-between">
                <p><b className="text-highlight">{title}</b></p>
            </div>
            {
                sentences.map((s, i) => <p key={i}
                    className="text-zinc-400 text-base font-light mt-3">• {s}</p>)
            }
        </div>
    )
}