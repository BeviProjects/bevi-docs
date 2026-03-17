import type { ReactNode } from "react";
import { Drawer } from "vaul";

type VaulDrawerProps = {
  children: ReactNode;
  fullScreen?: boolean;
  title: string;
  description: string;
};

export const VaulDrawer = ({
  children,
  fullScreen,
  title,
  description
}: VaulDrawerProps) => {
  return (
    <Drawer.Portal>
      <Drawer.Overlay className="fixed inset-0 bg-black/40" />
      <Drawer.Content
        className={`fixed bottom-0 left-0 right-0 ${fullScreen ? "custom-drawer-size" : "h-fit"} outline-none bg-gray-95 rounded-t-md`}
      >
        <div className="w-full py-md">
          <Drawer.Handle />
        </div>
        <Drawer.Title className="sr-only">{title}</Drawer.Title>
        <Drawer.Description className="sr-only">{description}</Drawer.Description>
        <div>{children}</div>
      </Drawer.Content>
    </Drawer.Portal>
  );
};
