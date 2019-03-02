// Actions
export const COUNT_UP   = 'COUNT_UP'
export const COUNT_DOWN = 'COUNT_DOWN'

// ActionCreators
export const countUp = () => {
    console.log("***countUp***");
    return {
        type: COUNT_UP
    }
}

export const countDown = () => {
    console.log("***countDown***");
    return {
        type: COUNT_DOWN
    }
}
