'use client'

import { useState } from "react";
import Card from "./projectCard";
import projects from "./projects.json"

export default function Projects() {
    const durations = ["slow", "medium", "fast"]
    const [filter, setFilter] = useState("All")
    
    const getRandDuration = () => {
        const idx = Math.floor(Math.random() * durations.length);
        return durations[idx]
    }
    return (
        <div className="min-h-screen flex-col">
            <h1 className="text-white mt-16 text-2xl w-full text-center mb-1">PROJECTS</h1>
            <p className="text-zinc-500 w-full text-center mb-16 text-sm">Hover on cards to see what's inside</p>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-2">
            {
                    filter == "All" ? Object.keys(projects).map(k => {
                        return Object.keys(projects[k]).map((t, index) => {
                            return <Card key={index} title={t} images={projects[k][t]["Images"]}
                                descriptions={projects[k][t]["Descriptions"]} speed={getRandDuration()}></Card>
                        })
                    }) :
                        Object.keys(projects[filter]).map((t, index) => {
                            return <Card key={index} title={t} images={projects[filter][t]["Images"]}
                                descriptions={projects[filter][t]["Descriptions"]} speed={getRandDuration()}></Card>
                        })
                }
            </div>  
        </div>
    )
}   