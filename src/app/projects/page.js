'use client'

import { useState } from "react";
import Card from "./projectCard";
import projects from "./projects.json"

export default function Projects() {
    const [filter, setFilter] = useState("All")

    return (
        <div className="min-h-screen flex-col">
            <h1 className="text-white mt-16 text-2xl w-full text-center mb-1">NOTABLE PROJECTS</h1>
            <p className="text-zinc-500 w-full text-center mb-16 text-sm">Hover on cards to see what's inside | Click to visit</p>
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
                    <option value="Web Development">Web Development</option>
                    <option value="Data Scraping">Data Scraping</option>
                    <option value="Game Development">Game Development</option>
                    <option value="App Development">App Development</option>
                </select>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-2">
                {
                    filter == "All" ? Object.keys(projects).map(k => {
                        return Object.keys(projects[k]).map((t, index) => {
                            return <Card key={index} title={t} images={projects[k][t]["Images"]}
                                descriptions={projects[k][t]["Descriptions"]}></Card>
                        })
                    }) :
                        Object.keys(projects[filter]).map((t, index) => {
                            return <Card key={index} title={t} images={projects[filter][t]["Images"]}
                                descriptions={projects[filter][t]["Descriptions"]}></Card>
                        })
                }
            </div>
        </div>
    )
}   