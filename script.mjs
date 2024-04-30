import { readFile } from "fs/promises"

const out1 = new Set(JSON.parse(await readFile("./out.json", { encoding: "utf-8" }))
    .map((entry) => {
        if (!entry.q) return null
        return `${entry.q} - ${entry.a}`
    })
    .filter(Boolean))

const out2 = new Set(JSON.parse(await readFile("./out2.json", { encoding: "utf-8" }))
    .map(x => x.results).flat()
    .map((entry) => {
        if (!entry.content) return null
        return `${entry.content} - ${entry.author}`
    })
    .filter(Boolean))

console.log(
    [...out1, ...out2]
        .join('\n')
)
