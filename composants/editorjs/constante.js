export const formatBytes = (bytes, decimals = 2) => {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb']

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    console.log(Math.log(bytes), Math.log(k))
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export const DateFormated = () => {
    const dateNow = Date.now()
    const date = new Date(dateNow)

    const jour = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
    const mois = ['Janvier', 'Fevrier', 'Mars', 'Avrier', 'Mai', 'Juin', 'Julliet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
    
    const heure = date.getHours() <= 9 ? `0${date.getHours()}` : date.getHours()
    const minut = date.getMinutes() <= 9 ? `0${date.getMinutes()}` : date.getMinutes()
    const secnd = date.getSeconds() <= 9 ? `0${date.getSeconds()}` : date.getSeconds()

    return {
        d : jour[date.getDay()],
        j : date.getDate(),
        m : mois[date.getMonth()],
        y : date.getFullYear(),
        hr : heure,
        mn : minut
    }
}