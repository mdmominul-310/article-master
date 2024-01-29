
class responseReturn {
    constructor() {

    }
    success(data: any, message?: string) {
        const res = {
            message: message || "Success",
            status: 200,
            succes: true,
            data: data
        }
        return res;
    }
    error(message?: any) {
        const res = {
            message: message || "Error",
            status: 400,
            succes: false,

        }
        return res;
    }
}

const ResponseReturn = new responseReturn();
export default ResponseReturn;