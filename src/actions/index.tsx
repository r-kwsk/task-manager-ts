//エラーのための処理
export const ActionType = {
    //ToDo
    CREATE_EVENT: 'CREATE_EVENT',
    DELETE_EVENT: 'DELETE_EVENT',
    DELETE_ALL_EVENTS: 'DELETE_ALL_EVENTS',

    // InProgress
    START_EVENT: 'START_EVENT',
    DELETE_EVENT_IN_PROGRESS: 'DELETE_EVENT_IN_PROGRESS',

    // Done
    FINISH_EVENT: 'FINISH_EVENT',
    DELETE_EVENT_DONE: 'DELETE_EVENT_DONE',

    //Log
    ADD_OPERATION_LOG: 'ADD_OPERATION_LOG',
    DELETE_ALL_OPERATION_LOGS: 'DELETE_ALL_OPERATION_LOGS',

    //CreateCount
    CREATE_COUNT_PLUS: 'CREATE_COUNT_PLUS'
}as const

type ValueOf<T> = T[keyof T]

export type Action = {
    type: ValueOf<typeof ActionType>
}

//ToDo
export const create_event = (): Action => ({
    type: ActionType.CREATE_EVENT
})
export const delete_event = (): Action => ({
    type: ActionType.DELETE_EVENT
})
export const delete_all_event = (): Action => ({
    type: ActionType.DELETE_ALL_EVENTS
})

//InProgress
export const start_event = (): Action => ({
    type: ActionType.START_EVENT
})
export const delete_all_in_progress = (): Action => ({
    type: ActionType.DELETE_EVENT_IN_PROGRESS
})

//Done
export const finish_event = (): Action => ({
    type: ActionType.FINISH_EVENT
})
export const delete_event_done = (): Action => ({
    type: ActionType.DELETE_EVENT_DONE
})

//Log
export const add_operation_log = (): Action => ({
    type: ActionType.ADD_OPERATION_LOG
})
export const delete_all_operation_logs = (): Action => ({
    type: ActionType.DELETE_ALL_OPERATION_LOGS
})

//CreateCount
export const create_count_plus = (): Action => ({
    type: ActionType.CREATE_COUNT_PLUS
})

// 以下、型宣言がゆるい記述
//ToDo
export const CREATE_EVENT: string  = 'CREATE_EVENT'
export const DELETE_EVENT: string = 'DELETE_EVENT'
export const DELETE_ALL_EVENTS: string  = 'DELETE_ALL_EVENTS'

//InProgress
export const START_EVENT: string  = 'START_EVENT';
export const DELETE_EVENT_IN_PROGRESS: string  = 'DELETE_EVENT_IN_PROGRESS';

//Done
export const FINISH_EVENT: string  = 'FINISH_EVENT';
export const DELETE_EVENT_DONE: string  = 'DELETE_EVENT_DONE';

//Log
export const ADD_OPERATION_LOG: string  = 'ADD_OPERATION_LOG';
export const DELETE_ALL_OPERATION_LOGS: string  = 'DELETE_ALL_OPERATION_LOGS';

//CreateCount
export const CREATE_COUNT_PLUS: string  = 'CREATE_COUNT_PLUS';
