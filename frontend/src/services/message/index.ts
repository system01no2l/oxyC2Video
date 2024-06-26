import { IResponse } from '@/interface/common/index'
import { IGetMessagesRequest } from '@/interface/request'
import http from '../axiosClient'
import { ENDPOINT } from '../endpoint'

class Message {
    getMessages = async (payload: {
        id: string
        params: IGetMessagesRequest
    }): Promise<any> => {
        return http.get(
            ENDPOINT.MESSAGE.GET_MESSAGES.replace(':id', payload.id),
            {
                params: payload.params,
            },
        )
    }

    getMedia = async (id: string, type: string): Promise<IResponse<any>> => {
        return http.get(ENDPOINT.MESSAGE.GET_MEDIA.replace(':id', id).replace(':type', type.toLocaleLowerCase()))
    }

    getFileMessage = async (url: string) => {
        const res = await http.get(url, { responseType: 'blob' })
        return res?.data
    }
}

export const MessageService = new Message()
