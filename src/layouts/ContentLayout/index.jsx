const ContentLayout = ({ children }) => {
  return (
    <main className="flex flex-col min-w-screen min-h-screen px-5 py-5   items-center">
      {children}
    </main>
  );
};

export default ContentLayout;
