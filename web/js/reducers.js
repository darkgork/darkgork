/**
 * Form state
 */
const FORMSTATE = {
    SYNC_DATA: 0,
    READY_TO_UPDATE: 1    
}

const initialState = {
    formState: -1,
    current: {},
    response: []
}

const crudReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORMSTATE.SYNC_DATA:
            return {
                formState: action.type,
                current: state.current,
                response: action.data
            }            
        case FORMSTATE.READY_TO_UPDATE:
            return {
                formState: action.type,
                current: action.data,
                response: state.response
            }            
        default:
            return state;                        
    }
}

/*
test('should change current', () => {
    // Arrange
    let action = {type: FORMSTATE.READY_TO_UPDATE, data: true};

    //Act
    let state = crudReducer(initialState, action);

    // Assert
    expect(state).toStrictEqual({
        formState: action.type,
        current: action.data,
        response: initialState.response
    });
})

test('should change response', () => {
    // Arrange
    let action = {type: FORMSTATE.SYNC_DATA, data: true};

    //Act
    let state = crudReducer(initialState, action);

    // Assert
    expect(state).toStrictEqual({
        formState: action.type,
        current: initialState.current,
        response: action.data
    });
})
*/