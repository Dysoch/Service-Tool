// frontend/src/services/api.ts
export const getClients = async () => {
    return new Promise<{ id: number, name: string }[]>(resolve =>
        setTimeout(() => resolve([{ id: 1, name: "Client A" }, { id: 2, name: "Client B" }]), 300)
    );
};
