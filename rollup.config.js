import pkg from './package.json';
import copy from 'rollup-plugin-copy';
const fs = require("fs-extra");

// Copy mxClient and append the exports
fs.copySync('./build/build.js', './tmp/build.js');
fs.appendFileSync('./tmp/build.js', `
export default {
    mxClient,
    mxLog,
    mxObjectIdentity,
    mxDictionary,
    mxResources,
    mxPoint,
    mxRectangle,
    mxEffects,
    mxUtils,
    mxConstants,
    mxEventObject,
    mxMouseEvent,
    mxEventSource,
    mxEvent,
    mxXmlRequest,
    mxClipboard,
    mxWindow,
    mxForm,
    mxImage,
    mxDivResizer,
    mxDragSource,
    mxToolbar,
    mxUndoableEdit,
    mxUndoManager,
    mxUrlConverter,
    mxPanningManager,
    mxPopupMenu,
    mxAutoSaveManager,
    mxAnimation,
    mxMorphing,
    mxImageBundle,
    mxImageExport,
    mxAbstractCanvas2D,
    mxXmlCanvas2D,
    mxSvgCanvas2D,
    mxVmlCanvas2D,
    mxGuide,
    mxStencil,
    mxShape,
    mxStencilRegistry,
    mxMarker,
    mxActor,
    mxCloud,
    mxRectangleShape,
    mxEllipse,
    mxDoubleEllipse,
    mxRhombus,
    mxPolyline,
    mxArrow,
    mxArrowConnector,
    mxText,
    mxTriangle,
    mxHexagon,
    mxLine,
    mxImageShape,
    mxLabel,
    mxCylinder,
    mxConnector,
    mxSwimlane,
    mxGraphLayout,
    mxStackLayout,
    mxPartitionLayout,
    mxCompactTreeLayout,
    mxRadialTreeLayout,
    mxFastOrganicLayout,
    mxCircleLayout,
    mxParallelEdgeLayout,
    mxCompositeLayout,
    mxEdgeLabelLayout,
    mxGraphAbstractHierarchyCell,
    mxGraphHierarchyNode,
    mxGraphHierarchyEdge,
    mxGraphHierarchyModel,
    mxSwimlaneModel,
    mxHierarchicalLayoutStage,
    mxMedianHybridCrossingReduction,
    mxMinimumCycleRemover,
    mxCoordinateAssignment,
    mxSwimlaneOrdering,
    mxHierarchicalLayout,
    mxSwimlaneLayout,
    mxGraphModel,
    mxCell,
    mxGeometry,
    mxCellPath,
    mxPerimeter,
    mxPrintPreview,
    mxStylesheet,
    mxCellState,
    mxGraphSelectionModel,
    mxCellEditor,
    mxCellRenderer,
    mxEdgeStyle,
    mxStyleRegistry,
    mxGraphView,
    mxGraph,
    mxCellOverlay,
    mxOutline,
    mxMultiplicity,
    mxLayoutManager,
    mxSwimlaneManager,
    mxTemporaryCellStates,
    mxCellStatePreview,
    mxConnectionConstraint,
    mxGraphHandler,
    mxPanningHandler,
    mxPopupMenuHandler,
    mxCellMarker,
    mxSelectionCellsHandler,
    mxConnectionHandler,
    mxConstraintHandler,
    mxRubberband,
    mxHandle,
    mxVertexHandler,
    mxEdgeHandler,
    mxElbowEdgeHandler,
    mxEdgeSegmentHandler,
    mxKeyHandler,
    mxTooltipHandler,
    mxCellTracker,
    mxCellHighlight,
    mxDefaultKeyHandler,
    mxDefaultPopupMenu,
    mxDefaultToolbar,
    mxEditor,
    mxCodecRegistry,
    mxCodec,
    mxObjectCodec,
    mxGenericChangeCodec,
    mxStylesheetCodec,
    mxDefaultToolbarCodec,
    EditorUi,
    Editor,
    Sidebar,
    Graph, 
    Shapes,
    Actions,
    Menus,
    Format, 
    Toolbar, 
    Dialogs
};
`);

export default [
  {
    input: 'tmp/build.js',
    plugins: [
      copy({
        "./@types/index.d.ts": "dist/index.d.ts",
        "./javascript/init.js" : "./dist/init.js",
        "./javascript/examples/grapheditor/www/images" : "./dist/images",
        "./javascript/examples/grapheditor/www/resources" : "./dist/resources",
        "./javascript/examples/grapheditor/www/stencils" : "./dist/stencils",
        "./javascript/examples/grapheditor/www/styles" : "./dist/styles",
        verbose: true
      })
    ],
    name: 'tsgraph',
    intro: `
      var mxLoadResources = false, mxForceIncludes, mxResourceExtension, mxLoadStylesheets, mxObjectCodec;
      var urlParams = {};
      var Shapes, Graph, Dialogs, HoverIcons;
     `,
    output: [
      { file: pkg.main, format: 'umd', strict: false},
    ]
  }
]

//fs.removeSync('./tmp');