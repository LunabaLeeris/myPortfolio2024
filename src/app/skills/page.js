import Card from "./card"

export default async function Skills() {
    return (
        <div className="min-h-screen flex-col">
            <h1 className="text-white mt-16 text-2xl w-full text-center mb-1">SKILLS</h1>
            <p className="text-zinc-500 w-full text-center mb-16 text-sm">Click cards to see what's inside</p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 w-full gap-2">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    )
}