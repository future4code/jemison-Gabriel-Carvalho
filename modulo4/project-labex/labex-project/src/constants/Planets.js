const Planets = [
    "Mercúrio",
    "Vênus",
    "Terra",
    "Marte",
    "Jupiter",
    "Saturno",
    "Urano",
    "Netuno",
    "Plutão"
]

export const ListPlanets = Planets.map((planet, index) => {
    return <option key={index}>{planet}</option>
})