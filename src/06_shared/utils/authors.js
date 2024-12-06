export const authorsShortName = (fullName) => {
    return fullName
        .split(' ')
        .map((name, key) => {
            if(key !== 0) {
                return `${name[0]}.`
            }
            return name
        }).join(' ')
}