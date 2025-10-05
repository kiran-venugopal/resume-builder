import isHotkey from "is-hotkey";
import React, {
  KeyboardEvent,
  PointerEvent,
  ReactElement,
  useCallback,
  useMemo,
} from "react";
import {
  Descendant,
  Editor,
  Element as SlateElement,
  Transforms,
  createEditor,
} from "slate";
import { withHistory } from "slate-history";
import {
  Editable,
  RenderElementProps,
  RenderLeafProps,
  Slate,
  useSlate,
  withReact,
} from "slate-react";
import {
  Button,
  Icon,
  LinkButton,
  LinkNode,
  Toolbar,
  withLinks,
} from "./components/RTETools";
import {
  CustomEditor,
  CustomElement,
  CustomElementType,
  CustomElementWithAlign,
  CustomTextKey,
} from "./custom-types.d";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Underline,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  Link,
} from "lucide-react";

const HOTKEYS: Record<string, CustomTextKey> = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
};

const LIST_TYPES = ["numbered-list", "bulleted-list"] as const;
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"] as const;

type AlignType = (typeof TEXT_ALIGN_TYPES)[number];
type ListType = (typeof LIST_TYPES)[number];
type CustomElementFormat = CustomElementType | AlignType | ListType;

const RichTextExample = () => {
  const renderElement = useCallback(
    (props: RenderElementProps) => <Element {...props} />,
    []
  );
  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  );
  const editor = useMemo(
    () => withHistory(withLinks(withReact(createEditor()))),
    []
  );

  return (
    <section className="border border-slate-200 rounded p-2">
      <Slate editor={editor} initialValue={initialValue}>
        <Toolbar className="gap-1 flex mb-2">
          <MarkButton format="bold" icon={<Bold className="w-5 h-5" />} />
          <MarkButton format="italic" icon={<Italic className="w-5 h-5" />} />
          <MarkButton
            format="underline"
            icon={<Underline className="w-5 h-5" />}
          />
          <BlockButton
            format="numbered-list"
            icon={<ListOrdered className="w-5 h-5" />}
          />
          <BlockButton
            format="bulleted-list"
            icon={<List className="w-5 h-5" />}
          />
          <BlockButton
            format="left"
            icon={<AlignLeftIcon className="w-5 h-5" />}
          />
          <LinkButton format="link" icon={<Link className="w-5 h-5" />} />
          <BlockButton
            format="center"
            icon={<AlignCenterIcon className="w-5 h-5" />}
          />
          <BlockButton
            format="right"
            icon={<AlignRightIcon className="w-5 h-5" />}
          />
        </Toolbar>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          spellCheck
          className="px-3 border border-input py-1 bg-white rounded-md min-h-[80px] text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey];
                toggleMark(editor, mark);
              }
            }
          }}
        />
      </Slate>
    </section>
  );
};

const toggleBlock = (editor: CustomEditor, format: CustomElementFormat) => {
  const isActive = isBlockActive(
    editor,
    format,
    isAlignType(format) ? "align" : "type"
  );
  const isList = isListType(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      isListType(n.type) &&
      !isAlignType(format),
    split: true,
  });
  let newProperties: Partial<SlateElement>;
  if (isAlignType(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    };
  } else {
    newProperties = {
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    };
  }
  Transforms.setNodes<SlateElement>(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const toggleMark = (editor: CustomEditor, format: CustomTextKey) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const isBlockActive = (
  editor: CustomEditor,
  format: CustomElementFormat,
  blockType: "type" | "align" = "type"
) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) => {
        if (!Editor.isEditor(n) && SlateElement.isElement(n)) {
          if (blockType === "align" && isAlignElement(n)) {
            return n.align === format;
          }
          return n.type === format;
        }
        return false;
      },
    })
  );

  return !!match;
};

const isMarkActive = (editor: CustomEditor, format: CustomTextKey) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const Element = ({ attributes, children, element }: RenderElementProps) => {
  const style: React.CSSProperties = {};
  if (isAlignElement(element)) {
    style.textAlign = element.align as AlignType;
  }
  switch (element.type) {
    case "block-quote":
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case "heading-one":
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    case "link":
      return (
        <LinkNode
          attributes={attributes}
          children={children}
          element={element}
        />
      );
    default:
      return (
        <span style={style} {...attributes}>
          {children}
        </span>
      );
  }
};

const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

interface BlockButtonProps {
  format: CustomElementFormat;
  icon: ReactElement;
}

const BlockButton = ({ format, icon }: BlockButtonProps) => {
  const editor = useSlate();
  return (
    <Button
      isActive={isBlockActive(
        editor,
        format,
        isAlignType(format) ? "align" : "type"
      )}
      onPointerDown={(event: PointerEvent<HTMLButtonElement>) =>
        event.preventDefault()
      }
      onClick={() => toggleBlock(editor, format)}
      data-test-id={`block-button-${format}`}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

interface MarkButtonProps {
  format: CustomTextKey;
  icon: ReactElement;
}

const MarkButton = ({ format, icon }: MarkButtonProps) => {
  const editor = useSlate();
  return (
    <Button
      isActive={isMarkActive(editor, format)}
      onPointerDown={(event: PointerEvent<HTMLButtonElement>) =>
        event.preventDefault()
      }
      onClick={() => toggleMark(editor, format)}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

const isAlignType = (format: CustomElementFormat): format is AlignType => {
  return TEXT_ALIGN_TYPES.includes(format as AlignType);
};

const isListType = (format: CustomElementFormat): format is ListType => {
  return LIST_TYPES.includes(format as ListType);
};

const isAlignElement = (
  element: CustomElement
): element is CustomElementWithAlign => {
  return "align" in element;
};

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

export default RichTextExample;
