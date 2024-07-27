'use client'

import { useState } from "react"
import Card from "./card"
import tech from "./tech.json"

export default function Tech() {
    const [filter, setFilter] = useState("All")

    return (
        <div className="min-h-screen flex-col">
            <h1 className="text-white mt-16 text-2xl w-full text-center mb-1">TECHNOLOGIES</h1>
            <p className="text-zinc-500 w-full text-center mb-16 text-sm">Click cards to see what's inside</p>
            <div className="w-full flex justify-end mb-5">
                <select
                    className="dropdown bg-black text-zinc-500 card-border rounded-0 p-1 cursor-pointer outline-0"
                    value={filter}
                    onChange={e => {
                        setFilter(e.target.value)
                    }}
                >
                    <option value="All">All</option>
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Languages">Languages</option>
                    <option value="Database Management">Database Management</option>
                    <option value="Data Scraping">Data Scraping</option>
                    <option value="Web Development">Web Development</option>
                </select>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-2">
                {
                    filter == "All" ? Object.keys(tech).map(k => {
                        return Object.keys(tech[k]).map((t, index) => {
                            return <Card key={index} title={t} image={tech[k][t]["Image"]}
                                description={tech[k][t]["Description"]}></Card>
                        })
                    }) :
                        Object.keys(tech[filter]).map((t, index) => {
                            return <Card key={index} title={t} image={tech[filter][t]["Image"]}
                                description={tech[filter][t]["Description"]}></Card>
                        })
                }
            </div>
        </div>
    )
}