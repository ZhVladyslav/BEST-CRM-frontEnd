import { dispatch } from '../store';
import slice from '../slices/utilsSlice';
import { uuid } from '../../utils/uuid';
import { IUtilsStoreMessage } from '../../interfaces/store.interface';

interface IAddMessage extends Pick<IUtilsStoreMessage, 'message' | 'status'> {}

class UtilsActions {
    // loading
    public loading(status: boolean) {
        dispatch(slice.actions.loading(status));
    }

    // loading app
    public loadingApp(status: boolean) {
        dispatch(slice.actions.loadingApp(status));
    }

    // window size
    public updateWindowSize(windowSize: { width: number; height: number }) {
        dispatch(slice.actions.updateWindowSize(windowSize));
    }

    // message
    public addMessage(message: IAddMessage) {
        dispatch(
            slice.actions.addMessage({
                id: uuid.generate(),
                status: message.status,
                message: message.message,
            }),
        );
    }

    public deleteMessage(id: string) {
        dispatch(slice.actions.deleteMessage(id));
    }
}

export const utilsActions = new UtilsActions();
