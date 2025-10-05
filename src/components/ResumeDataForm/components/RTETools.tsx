import { Input } from "@/components/ui/input";
import clsx from "clsx";
import {
  Delete,
  DeleteIcon,
  ExternalLink,
  Plus,
  Trash2,
  Unlink,
} from "lucide-react";
import React, {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
  Ref,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import { Editor, Element, Path, Range, Transforms } from "slate";
import { useFocused, useSelected, useSlate, useSlateStatic } from "slate-react";
import { Button as DSButton } from "@/components/ui/button";

export const Button = React.forwardRef(
  (
    {
      className,
      ...props
    }: ButtonHTMLAttributes<object> & { isActive: boolean },
    ref: Ref<HTMLButtonElement>
  ) => (
    <button
      {...props}
      ref={ref}
      className={clsx(className, "border p-1 cursor-pointer", {
        " border-amber-400": props.isActive,
        "border-transparent": !props.isActive,
      })}
    />
  )
);
Button.displayName = "Button";

export const Icon = React.forwardRef(
  (
    { className, ...props }: HTMLAttributes<HTMLSpanElement>,
    ref: Ref<HTMLSpanElement>
  ) => <span {...props} ref={ref} className={clsx(className, "w-4 h-4")} />
);

Icon.displayName = "Icon";

export const Instruction = React.forwardRef(
  (
    { className, ...props }: HTMLAttributes<HTMLDivElement>,
    ref: Ref<HTMLDivElement>
  ) => <div {...props} ref={ref} className={className} />
);
Instruction.displayName = "Instruction";

export const Menu = React.forwardRef(
  (
    { className, ...props }: HTMLAttributes<HTMLDivElement>,
    ref: Ref<HTMLDivElement>
  ) => <div {...props} data-test-id="menu" ref={ref} className={className} />
);
Menu.displayName = "Menu";

export const Portal = ({ children }: { children?: ReactNode }) => {
  return typeof document === "object"
    ? ReactDOM.createPortal(children, document.body)
    : null;
};

export const Toolbar = React.forwardRef(
  (
    { className, ...props }: HTMLAttributes<object>,
    ref: Ref<HTMLDivElement>
  ) => <Menu {...props} ref={ref} className={className} />
);
Toolbar.displayName = "Toolbar";

function usePopup(popupRef) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      const clickedComponent = e.target;
      if (!popupRef?.current?.contains(clickedComponent)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [showPopup, setShowPopup];
}

const createLinkNode = (href, showInNewTab, text) => ({
  type: "link",
  href,
  target: showInNewTab ? "_blank" : "_self",
  children: [{ text }],
});

const removeLink = (editor: any) => {
  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && Element.isElement(n) && n.type === "link",
  });
};

const insertLink = (editor, { url, showInNewTab }) => {
  if (!url) return;

  const { selection } = editor;
  const link = createLinkNode(url, showInNewTab, "Link") as any;
  if (!!selection) {
    const [parent, parentPath] = Editor.parent(
      editor,
      selection.focus.path
    ) as any;
    if (parent.type === "link") {
      removeLink(editor);
    }

    if (editor.isVoid(parent)) {
      Transforms.insertNodes(
        editor,
        { type: "paragraph", children: [link] },
        {
          at: Path.next(parentPath),
          select: true,
        }
      );
    } else if (Range.isCollapsed(selection)) {
      Transforms.insertNodes(editor, link, { select: true });
    } else {
      Transforms.wrapNodes(editor, link, { split: true });
    }
  } else {
    Transforms.insertNodes(editor, { type: "paragraph", children: [link] });
  }
};

export const LinkButton = (props: any) => {
  const editor = useSlate() as any;
  const linkInputRef = useRef(null);
  const [showInput, setShowInput] = usePopup(linkInputRef) as any;
  const [url, setUrl] = useState("");
  const [showInNewTab, setShowInNewTab] = useState(false);
  const [selection, setSelection] = useState();
  const handleInsertLink = () => {
    Transforms.select(editor, selection);
    insertLink(editor, { url, showInNewTab });
    setUrl("");
    setShowInput((prev) => !prev);
    setShowInNewTab(false);
  };
  const toggleLink = () => {
    setSelection(editor.selection);
    setShowInput((prev) => !prev);
  };
  const handleInputChange = ({ target }) => {
    if (target.type === "checkbox") {
      setShowInNewTab((prev) => !prev);
    } else {
      setUrl(target.value);
    }
  };
  return (
    <div ref={linkInputRef} className="relative">
      <Button
        className={showInput ? "clicked" : ""}
        isActive={props.isActive}
        onClick={toggleLink}
      >
        {props.icon}
      </Button>
      {showInput && (
        <div className="rounded absolute shadow p-2 z-1 bg-white">
          <div style={{ display: "flex", gap: "4px", margin: "5px 2px" }}>
            <Input
              type="text"
              placeholder="https://google.com"
              value={url}
              onChange={handleInputChange}
              className="block grow shrink-0 w-auto"
            />
            <DSButton
              className="cursor-pointer"
              variant="secondary"
              onClick={handleInsertLink}
            >
              <Plus />
              Add
            </DSButton>
          </div>
          <label className="flex w-full items-center gap-1">
            <input
              type="checkbox"
              checked={showInNewTab}
              onChange={handleInputChange}
            />
            <span style={{ fontSize: "0.8em" }}>Open in new tab</span>
          </label>
        </div>
      )}
    </div>
  );
};

export const LinkNode = ({ attributes, element, children }) => {
  const editor = useSlateStatic();
  const selected = useSelected();
  const focused = useFocused();
  return (
    <div className="relative inline">
      <a
        href={element.href}
        {...attributes}
        {...element.attr}
        target={element.target}
        className="text-blue-600 underline"
      >
        {children}
      </a>
      {selected && focused && (
        <div
          className="absolute z-1 rounded p-2 text-xs flex gap-1 items-center left-0 shadow border border-slate-200"
          contentEditable={false}
        >
          <a
            onMouseDown={(e) => e.preventDefault()}
            href={element.href}
            target="_blank"
            className="underline text-blue-600 flex items-start py-1"
          >
            <ExternalLink className="w-3 h-3 pt-1" />
            {element.href}
          </a>
          <DSButton
            variant="secondary"
            onClick={() => removeLink(editor)}
            size="sm"
          >
            <Trash2 className="w-3 h-3 stroke-red-600" />
          </DSButton>
        </div>
      )}
    </div>
  );
};

export const withLinks = (editor) => {
  const { isInline } = editor;
  editor.isInline = (element) =>
    element.type === "link" ? true : isInline(element);
  return editor;
};
