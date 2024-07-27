export default function ExpCard({title, companies, duration, sentences}){
    return (
        <div className="w-11/12 md:w-9/12">
            <div className="text-white grid grid-cols-3">
            <p><b className="text-highlight">{title}</b></p>
                <p className="text-center">{companies}</p>
                <p className="text-right">{duration}</p>
            </div>
            {
                sentences.map((s, i) => <p key={i} 
                className="text-zinc-400 text-base font-light mt-3">{s}</p>)
            }
        </div>
    )
}