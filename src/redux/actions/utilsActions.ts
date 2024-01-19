import { dispatch } from '../store';
import slice from '../slices/utilsSlice';

class UtilsActions {
    public updateWindowSize(windowSize: { width: number; height: number }) {
        dispatch(slice.actions.updateWindowSize(windowSize));
    }

    public addMessage(message: { code: number; message: string }) {
        dispatch(
            slice.actions.addMessage({
                code: message.code,
                message: message.message,
            }),
        );
    }

    public deleteMessage(id: number) {
        dispatch(slice.actions.deleteMessage(id));
    }
}

export const utilsActions = new UtilsActions();