declare namespace NU {

    enum ButtonSize {
        NONE = "none",
        SMALLER = "smaller",
        SMALL = "small",
        MEDIUM = "medium",
        LARGE = "large",
        BIG = "big"
    }
    enum ButtonColor {
        NONE = "none",
        PRIMARY = "primary",
        PRIMARY_CONTAINER = "primary_container",
        SECONDARY = "secondary",
        SECONDARY_CONTAINER = "secondary_container",
        TERTIARY = "tertiary",
        TERTIARY_CONTAINER = "tertiary_container"
    }
    enum ButtonType {
        NONE = "none",
        FILLED = "filled",
        OUTLINED = "outlined",
        ELEVATED = "elevated"
    }

    namespace Options {
        type Alert = {
            /**
             * N.alert의 메시지 대화상자가 표시될 영역을 지정합니다.
             *
             * modal 옵션이 true로 설정되었을 때 N.alert의 overlay 요소가 context로 지정한 요소만큼 가려 줍니다.
             * > window 객체를 지정하면 화면 전체를 덮어 주고 jquery selector 나 jQuery object를 입력하면 지정한 요소만큼 만 가려줍니다.
             *
             * 입력 요소(select, input, textarea 등)를 지정하면 입력 요소 옆에 툴팁으로 메시지를 표시해 줍니다.
             */
            context?: Window | NJS<HTMLElement[]> | null;
            /**
             * 메시지 내용.
             *
             * > 메시지 문자열, jQuery object, HTML 문자열이나 HTML 요소를 지정할 수 있습니다.
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            msg: string;
            /**
             * 메시지의 변수를 입력 한 값으로 치환해 줍니다.
             * > 메시지에 선언된 `{index}`와 같은 변수가 vars 옵션으로 설정 한 array의 index에 해당하는 값으로 치환됩니다.
             * ```
             * N(window).alert({
             *     msg: "{0} {1}-JS.",
             *     vars: ["Hello", "Natural"]
             * }).show();
             *
             * // Result message: "Hello Natural-JS"
             * ```
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            vars?: string[] | undefined;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            html?: boolean;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            top?: number | undefined;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            left?: number | undefined;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            width?: NU.EventHandlers.Alert.Width | number;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            height?: NU.EventHandlers.Alert.Height | number;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            isInput?: boolean;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            isWindow?: boolean;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            title?: string;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            button?: boolean;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            okButtonOpts?: NU.Options.Button | null;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            cancelButtonOpts?: NU.Options.Button | null;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            closeMode?: "hide" | "remove";
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            modal?: boolean;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            onOk?: NU.EventHandlers.Alert.OnOk | null;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            onCancel?: NU.EventHandlers.Alert.OnCancel | null;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            onBeforeShow?: NU.EventHandlers.Alert.OnBeforeShow | null;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            onShow?: NU.EventHandlers.Alert.OnShow | null;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            onBeforeHide?: NU.EventHandlers.Alert.OnBeforeHide | null;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            onHide?: NU.EventHandlers.Alert.OnHide | null;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            onBeforeRemove?: NU.EventHandlers.Alert.OnBeforeRemove | null;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            onRemove?: NU.EventHandlers.Alert.OnRemove | null;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            overlayColor?: "string" | null;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            overlayClose?: boolean;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            escClose?: boolean;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            confirm?: boolean;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            alwaysOnTop?: boolean;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            alwaysOnTopCalcTarget?: string;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            dynPos?: boolean;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            windowScrollLock?: boolean;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            draggable?: boolean;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            draggableOverflowCorrection?: boolean;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            draggableOverflowCorrectionAddValues?: {
                top?: number;
                bottom?: number;
                left?: number;
                right?: number
            };
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            saveMemory?: boolean;
        };

        type Button = {
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html }
             */
            context?: NJS<HTMLElement[]> | null;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html }
             */
            size?: ButtonSize;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html }
             */
            color?: ButtonColor;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html }
             */
            type?: ButtonType;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html }
             */
            disable?: boolean;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html }
             */
            onBeforeCreate?: NU.EventHandlers.Button.OnBeforeCreate | null;
            /**
             *
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html }
             */
            onCreate?: NU.EventHandlers.Button.OnCreate | null;
        };

        type Datepicker = {
            context?: NJS<HTMLElement[]> | null;
            monthonly?: boolean;
            focusin?: boolean;
            yearsPanelPosition?: "left" | "top";
            monthsPanelPosition?: "left" | "top";
            minYear?: number;
            maxYear?: number;
            yearChangeInput?: boolean;
            monthChangeInput?: boolean;
            touchMonthChange?: boolean;
            scrollMonthChange?: boolean;
            minDate?: string;
            maxDate?: string;
            holiday?: {
                "repeat"?: {
                    [key: string]: string | string[]
                } | null;
                "once"?: {
                    [key: string]: string | string[]
                } | null;
            };
            onChangeYear?: NU.EventHandlers.Datepicker.OnChangeYear | null;
            onChangeMonth?: NU.EventHandlers.Datepicker.OnChangeMonth | null;
            onSelect?: NU.EventHandlers.Datepicker.OnSelect | null;
            onBeforeShow?: NU.EventHandlers.Datepicker.OnBeforeShow | null;
            onShow?: NU.EventHandlers.Datepicker.OnShow | null;
            onBeforeHide?: NU.EventHandlers.Datepicker.OnBeforeHide | null;
            onHide?: NU.EventHandlers.Datepicker.OnHide | null;
        };

        type Popup = {
            context?: NJS<HTMLElement[]> | null;
            url?: string,
            title?: string;
            button?: boolean;
            modal?: boolean,
            top?: number | undefined;
            left?: number | undefined;
            width?: NU.EventHandlers.Popup.Width | number;
            height?: NU.EventHandlers.Popup.Height | number;
            opener?: NA.Objects.Controller.Object | null,
            closeMode?: "hide" | "remove";
            alwaysOnTop?: boolean;
            confirm?: boolean;
            overlayClose?: boolean;
            escClose?: boolean;
            onOk?: NU.EventHandlers.Popup.OnOk | null;
            onCancel?: NU.EventHandlers.Popup.OnCancel | null;
            onBeforeShow?: NU.EventHandlers.Popup.OnBeforeShow | null;
            onShow?: NU.EventHandlers.Popup.OnShow | null;
            onBeforeHide?: NU.EventHandlers.Popup.OnBeforeHide | null;
            onHide?: NU.EventHandlers.Popup.OnHide | null;
            onBeforeRemove?: NU.EventHandlers.Popup.OnBeforeRemove | null;
            onRemove?: NU.EventHandlers.Popup.OnRemove | null;
            onOpen?: string | NU.EventHandlers.Popup.OnOpen | null,
            onOpenData?: any | null,
            onClose?: NU.EventHandlers.Popup.OnClose | null,
            onCloseData?: any | null,
            onLoad?: NU.EventHandlers.Popup.OnLoad | null,
            preload?: boolean,
            dynPos?: boolean;
            windowScrollLock?: boolean;
            draggable?: boolean;
            draggableOverflowCorrection?: boolean;
            draggableOverflowCorrectionAddValues?: {
                top?: number;
                bottom?: number;
                left?: number;
                right?: number
            };
            saveMemory?: boolean;
        };

        type EachTab = {
            url?: string;
            active?: boolean;
            preload?: boolean;
            onOpen?: string | NU.EventHandlers.Tab.OnOpen;
            disable?: boolean;
            stateless?: boolean
        };
        type Tab = {
            context?: NJS<HTMLElement[]> | null;
            links?: NJS<HTMLElement[]> | null;
            tabOpts?: NU.Options.EachTab[];
            randomSel?: boolean;
            opener?: NA.Objects.Controller.Object | null;
            onActive?: NU.EventHandlers.Tab.OnActive | null;
            onLoad?: NU.EventHandlers.Tab.OnLoad | null;
            blockOnActiveWhenCreate?: boolean;
            contents?: NJS<HTMLElement[]> | null;
            tabScroll?: boolean;
            tabScrollCorrection?: {
                tabContainerWidthCorrectionPx?: number;
                tabContainerWidthReCalcDelayTime?: number;
            }
        };

        type Select = {
            data?: NJS<NC.JSONObject>;
            context?: NJS<HTMLElement[]> | null;
            key?: string;
            val?: string;
            append?: boolean;
            direction?: "h" | "v";
            type?: 0 | 1 | 2 | 3 | 4;
            template?: NJS<HTMLElement[]> | null;
        };

        type Form = {
            data?: NJS<NC.JSONObject>;
            row?: number;
            context?: NJS<HTMLElement[]> | null;
            validate?: boolean;
            autoUnbind?: boolean;
            state?: "add" | "bind" | "revert" | "update" | null;
            html?: boolean;
            addTop?: boolean;
            fRules?: ND.FormatRuleObject | null;
            vRules?: ND.ValidationRuleObject | null;
            extObj?: NU.List | NU.Grid | null;
            extRow?: number;
            revert?: boolean;
            cache?: boolean;
            unbind?: boolean;
            tpBind?: boolean;
            onBeforeBindValue?: NU.EventHandlers.Form.OnBeforeBindValue | null;
            onBindValue?: NU.EventHandlers.Form.OnBindValue | null;
            onBeforeBind?: NU.EventHandlers.Form.OnBeforeBind | null;
            onBind?: NU.EventHandlers.Form.OnBind | null;
            InitialData?: NJS<NC.JSONObject>;
        };

        type List = {
            data?: NJS<NC.JSONObject>;
            row?: number;
            beforeRow?: number;
            context?: NJS<HTMLElement[]> | null;
            height?: number;
            validate?: boolean;
            html?: boolean;
            addTop?: boolean;
            addSelect?: boolean;
            vResizable?: boolean;
            windowScrollLock?: boolean;
            select?: boolean;
            unselect?: boolean;
            multiselect?: boolean;
            checkAll?: JQuery.Selector;
            checkAllTarget?: JQuery.Selector;
            checkSingleTarget?: JQuery.Selector;
            hover?: boolean;
            revert?: boolean;
            createRowDelay?: number;
            scrollPaging?: {
                idx?: number;
                size?: number;
            };
            fRules?: ND.FormatRuleObject | null;
            vRules?: ND.ValidationRuleObject | null;
            appendScroll?: boolean;
            addScroll?: boolean;
            selectScroll?: boolean;
            checkScroll?: boolean;
            validateScroll?: boolean;
            cache?: boolean;
            tpBind?: boolean;
            rowHandlerBeforeBind?: NU.EventHandlers.List.RowHandlerBeforeBind | null;
            rowHandler?: NU.EventHandlers.List.RowHandler | null;
            onBeforeSelect?: NU.EventHandlers.List.OnBeforeSelect | null;
            onSelect?: NU.EventHandlers.List.OnSelect | null;
            onBind?: NU.EventHandlers.List.OnBind | null;
        };

        type GridMisc = {
            resizableCorrectionWidth?: number;
            resizableLastCellCorrectionWidth?: number;
            resizeBarCorrectionLeft?: number;
            resizeBarCorrectionHeight?: number;
            fixedcolHeadMarginTop?: number;
            fixedcolHeadMarginLeft?: number;
            fixedcolHeadHeight?: number;
            fixedcolBodyMarginTop?: number;
            fixedcolBodyMarginLeft?: number;
            fixedcolBodyBindHeight?: number;
            fixedcolBodyAddHeight?: number;
            fixedcolRootContainer?: JQuery.Selector | null;
        };

        type Grid = {
            data?: NJS<NC.JSONObject>;
            row?: number;
            beforeRow?: number;
            context?: NJS<HTMLElement[]> | null;
            height?: number;
            fixedcol?: number;
            more?: boolean | string[];
            validate?: boolean;
            html?: boolean;
            addTop?: boolean;
            addSelect?: boolean;
            filter?: boolean;
            resizable?: boolean;
            vResizable?: boolean;
            sortable?: boolean;
            windowScrollLock?: boolean;
            select?: boolean;
            unselect?: boolean;
            multiselect?: boolean;
            checkAll?: JQuery.Selector;
            checkAllTarget?: JQuery.Selector;
            checkSingleTarget?: JQuery.Selector;
            hover?: boolean;
            revert?: boolean;
            createRowDelay?: number;
            scrollPaging?: {
                idx?: number;
                size?: number;
            };
            fRules?: ND.FormatRuleObject | null;
            vRules?: ND.ValidationRuleObject | null;
            appendScroll?: boolean;
            addScroll?: boolean;
            selectScroll?: boolean;
            checkScroll?: boolean;
            validateScroll?: boolean;
            cache?: boolean;
            tpBind?: boolean;
            pastiable?: boolean;
            rowHandlerBeforeBind?: NU.EventHandlers.Grid.RowHandlerBeforeBind | null;
            rowHandler?: NU.EventHandlers.Grid.RowHandler | null;
            onBeforeSelect?: NU.EventHandlers.Grid.OnBeforeSelect | null;
            onSelect?: NU.EventHandlers.Grid.OnSelect | null;
            onBind?: NU.EventHandlers.Grid.OnBind | null;
            misc?: NU.Options.GridMisc;
            currMoveToRow?: number;
        };

        type CurrPageNavInfo = {
            /**
             * Current page number.
             */
            pageNo: number;
            /**
             * Row count per page.
             */
            countPerPage: number;
            /**
             * Page count per page set.
             */
            countPerPageSet: number;
            /**
             * Total row count.
             */
            totalCount: number;
            /**
             * Total page count.
             */
            pageCount: number;
            /**
             * Total page set count.
             */
            pageSetCount: number;
            /**
             * Current page set number.
             */
            currSelPageSet: number;
            /**
             * First page number in the current page set.
             */
            startPage: number;
            /**
             * Last page number in the current page set.
             */
            endPage: number;
            /**
             * First row index on the selected page.
             */
            startRowIndex: number;
            /**
             * First row number of the selected page.
             */
            startRowNum: number;
            /**
             * Last row index on the selected page.
             */
            endRowIndex: number;
            /**
             * Last row number of the selected page.
             */
            endRowNum: number;
        };
        type Pagination = {
            data?: NJS<NC.JSONObject>;
            context?: NJS<HTMLElement[]> | null;
            /**
             * Total row count.
             */
            totalCount?: number;
            /**
             * Row count per page.
             */
            countPerPage?: number;
            /**
             * Page count per page set.
             */
            countPerPageSet?: number;
            /**
             * Current page number.
             */
            pageNo?: number;
            onChange?: NU.EventHandlers.Pagination.OnChange | null;
            blockOnChangeWhenBind?: boolean;
            currPageNavInfo?: NU.Options.CurrPageNavInfo | null;
        };

        type Tree = {
            data?: NJS<NC.JSONObject>;
            context?: NJS<HTMLElement[]> | null;
            key?: string;
            val?: string;
            level?: string;
            parent?: string;
            folderSelectable?: boolean;
            checkbox?: boolean;
            onSelect?: NU.EventHandlers.Tree.OnSelect | null;
            onCheck?: NU.EventHandlers.Tree.OnCheck | null;
        };

    }

    namespace EventHandlers {
        namespace Alert {
            type Width = {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): number;
            }
            type Height = {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): number;
            }
            type OnOk = {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): undefined | 0;
            }
            type OnCancel = {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): undefined | 0;
            }
            type OnBeforeShow = {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnShow = {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnBeforeHide = {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnHide = {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnBeforeRemove = {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnRemove = {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
        }
        namespace Button {
            type OnBeforeCreate = {
                (this: NU.Button, context: NJS<HTMLElement[]>, opts: NU.Options.Button): void;
            }
            type OnCreate = {
                (this: NU.Button, context: NJS<HTMLElement[]>, opts: NU.Options.Button): void;
            }
        }
        namespace Datepicker {
            type OnChangeYear = {
                (this: NU.Datepicker, context: NJS<HTMLElement[]>, selYearStr: string, e: JQuery.Event): void;
            }
            type OnChangeMonth = {
                (this: NU.Datepicker, context: NJS<HTMLElement[]>, selMonthStr: string, selYearStr: string, e: JQuery.Event): void;
            }
            type OnSelect = {
                (this: NU.Datepicker, context: NJS<HTMLElement[]>, selDate: NC.Date, monthonly: boolean): void;
            }
            type OnBeforeShow = {
                (this: NU.Datepicker, context: NJS<HTMLElement[]>, contents: NJS<HTMLElement[]>): undefined | false;
            }
            type OnShow = {
                (this: NU.Datepicker, context: NJS<HTMLElement[]>, contents: NJS<HTMLElement[]>): void;
            }
            type OnBeforeHide = {
                (this: NU.Datepicker, context: NJS<HTMLElement[]>, contents: NJS<HTMLElement[]>): void;
            }
            type OnHide = {
                (this: NU.Datepicker, context: NJS<HTMLElement[]>): void;
            }
        }
        namespace Popup {
            type Width = {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): number;
            }
            type Height = {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): number;
            }
            type OnOk = {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): undefined | 0;
            }
            type OnCancel = {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): undefined | 0;
            }
            type OnBeforeShow = {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnShow = {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnBeforeHide = {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnHide = {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnBeforeRemove = {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnRemove = {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnOpen = {
                (this: NA.Objects.Controller.Object, onOpenData?: any): void;
            }
            type OnClose = {
                (this: NU.Popup, onCloseData?: any): void;
            }
            type OnLoad = {
                (this: NU.Popup, cont: NA.Objects.Controller.Object): void;
            }
        }
        namespace Tab {
            type OnOpen = {
                (this: NA.Objects.Controller.Object, onOpenData?: any): void;
            }
            type OnActive = {
                (this: NU.Tab, selTabIdx: number, selTabEle: NJS<HTMLElement[]>, selContentEle: NJS<HTMLElement[]>, links: NJS<HTMLElement[]>, contents: NJS<HTMLElement[]>): void;
            }
            type OnLoad = {
                (this: NU.Tab, selTabIdx: number, selTabEle: NJS<HTMLElement[]>, selContentEle: NJS<HTMLElement[]>, cont: NA.Objects.Controller.Object): void;
            }
        }
        namespace Form {
            type OnBeforeBindValue = {
                (this: NU.Form, ele: NJS<HTMLElement[]>, val: NC.Primitive | NC.Primitive[], action: "bind" | "val"): NC.Primitive | NC.Primitive[];
            }
            type OnBindValue = {
                (this: NU.Form, ele: NJS<HTMLElement[]>, val: NC.Primitive | NC.Primitive[], action: "bind" | "val"): void;
            }
            type OnBeforeBind = {
                (this: NU.Form, context: NJS<HTMLElement[]>, vals: NC.JSONObject): void;
            }
            type OnBind = {
                (this: NU.Form, context: NJS<HTMLElement[]>, vals: NC.JSONObject): void;
            }
        }
        namespace List {
            type RowHandlerBeforeBind = {
                (this: NU.List, rowIdx: number, rowEle: NJS<HTMLElement[]>, rowData: NC.JSONObject): void;
            }
            type RowHandler = {
                (this: NU.List, rowIdx: number, rowEle: NJS<HTMLElement[]>, rowData: NC.JSONObject): void;
            }
            type OnBeforeSelect = {
                (this: NU.List, rowIdx: number, rowEle: NJS<HTMLElement[]>, rowData: NJS<NC.JSONObject>, beforeRowIdx: number, e: JQuery.Event): undefined | false;
            }
            type OnSelect = {
                (this: NU.List, rowIdx: number, rowEle: NJS<HTMLElement[]>, rowData: NJS<NC.JSONObject>, beforeRowIdx: number, e: JQuery.Event): void;
            }
            type OnBind = {
                (this: NU.List, context: NJS<HTMLElement[]>, data: NJS<NC.JSONObject>, isFirstPage: boolean, isLastPage: boolean): void;
            }
        }
        namespace Grid {
            type RowHandlerBeforeBind = {
                (this: NU.Grid, rowIdx: number, rowEle: NJS<HTMLElement[]>, rowData: NC.JSONObject): void;
            }
            type RowHandler = {
                (this: NU.Grid, rowIdx: number, rowEle: NJS<HTMLElement[]>, rowData: NC.JSONObject): void;
            }
            type OnBeforeSelect = {
                (this: NU.Grid, rowIdx: number, rowEle: NJS<HTMLElement[]>, rowData: NJS<NC.JSONObject>, beforeRowIdx: number, e: JQuery.Event): undefined | false;
            }
            type OnSelect = {
                (this: NU.Grid, rowIdx: number, rowEle: NJS<HTMLElement[]>, rowData: NJS<NC.JSONObject>, beforeRowIdx: number, e: JQuery.Event): void;
            }
            type OnBind = {
                (this: NU.Grid, context: NJS<HTMLElement[]>, data: NJS<NC.JSONObject>, isFirstPage: boolean, isLastPage: boolean): void;
            }
        }
        namespace Pagination {
            type OnChange = {
                (this: NU.Pagination, pageNo: number, selEle: NJS<HTMLElement[]>, selData: NC.JSONObject[], currPageNavInfo: NU.Options.CurrPageNavInfo): void;
            }
        }
        namespace Tree {
            type OnSelect = {
                (this: NU.Tree, selNodeIndex: number, selNodeEle: NJS<HTMLElement[]>, selNodeData: NC.JSONObject): void;
            }
            type OnCheck = {
                (this: NU.Tree, selNodeIndex: number, selNodeEle: NJS<HTMLElement[]>, selNodeData: NC.JSONObject
                    , checkedElesIndexes: number[], checkedEles: NJS<HTMLElement[]>, checkedElesData: NC.JSONObject[]
                    , checkFlag: boolean): void;
            }
        }
    }

    namespace Callbacks {
        namespace Popup {
            type LoadContent = {
                (this: NU.Popup, cont?: NA.Objects.Controller.Object, context?: NJS<HTMLElement[]>): void;
            }
        }
        namespace Tab {
            type LoadContent = {
                (this: NU.Tab, cont?: NA.Objects.Controller.Object, context?: NJS<HTMLElement[]>): void;
            }
        }
    }

    namespace Objects {
        namespace Grid {
            type TableMap = {
                colgroup: HTMLElement[][];
                thead: HTMLTableCellElement[][];
                tbody: HTMLTableCellElement[][];
                tfoot: HTMLTableCellElement[][];
            };
        }

        namespace Pagination {
            type LinkEles = {
                body: HTMLElement[][];
                page: HTMLElement[][];
                first: HTMLElement[][];
                prev: HTMLElement[][];
                next: HTMLElement[][];
                last: HTMLElement[][];
            };
        }
    }

}
