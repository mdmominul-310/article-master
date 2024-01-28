const AuthLayout = ({ children }: { children: React.ReactNode }) => (
    <div className="container my-2 w-1/2 bg-white rounded shadow dark:bg-black p-4">
        {children}
    </div>
);

export default AuthLayout;