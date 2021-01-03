interface AlertState {
    message: string;
}

interface AlertAction {
    type: string;
}

export function alert(state:AlertState, action: AlertAction): AlertState {
    switch (action.type) {
        case "success":
            return {
                message: "success",
            };
        case "failure":
            return {
                message: "failure",
            };
            
        default:
            return state;
    }
}