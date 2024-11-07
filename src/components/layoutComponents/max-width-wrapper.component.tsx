interface MaxWidthWrapperProps {
  children: React.ReactNode;
}

export function MaxWidthWrapper({ children }: MaxWidthWrapperProps) {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">{children}</div>
    </>
  );
}
