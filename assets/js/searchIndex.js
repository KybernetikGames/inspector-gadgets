
var camelCaseTokenizer = function (builder) {

  var pipelineFunction = function (token) {
    var previous = '';
    // split camelCaseString to on each word and combined words
    // e.g. camelCaseTokenizer -> ['camel', 'case', 'camelcase', 'tokenizer', 'camelcasetokenizer']
    var tokenStrings = token.toString().trim().split(/[\s\-]+|(?=[A-Z])/).reduce(function(acc, cur) {
      var current = cur.toLowerCase();
      if (acc.length === 0) {
        previous = current;
        return acc.concat(current);
      }
      previous = previous.concat(current);
      return acc.concat([current, previous]);
    }, []);

    // return token for each string
    // will copy any metadata on input token
    return tokenStrings.map(function(tokenString) {
      return token.clone(function(str) {
        return tokenString;
      })
    });
  }

  lunr.Pipeline.registerFunction(pipelineFunction, 'camelCaseTokenizer')

  builder.pipeline.before(lunr.stemmer, pipelineFunction)
}
var searchModule = function() {
    var documents = [];
    var idMap = [];
    function a(a,b) { 
        documents.push(a);
        idMap.push(b); 
    }

    a(
        {
            id:0,
            title:"MethodCache OverridePropertyGUIMethod",
            content:"MethodCache OverridePropertyGUIMethod",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/OverridePropertyGUIMethod',
            title:"MethodCache.OverridePropertyGUIMethod",
            description:""
        }
    );
    a(
        {
            id:1,
            title:"AutoPrefs String",
            content:"AutoPrefs String",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/String',
            title:"AutoPrefs.String",
            description:""
        }
    );
    a(
        {
            id:2,
            title:"Shortcut",
            content:"Shortcut",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/Shortcut',
            title:"Shortcut",
            description:""
        }
    );
    a(
        {
            id:3,
            title:"AutoPrefs EditorString",
            content:"AutoPrefs EditorString",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/EditorString',
            title:"AutoPrefs.EditorString",
            description:""
        }
    );
    a(
        {
            id:4,
            title:"ReadonlyAttribute",
            content:"ReadonlyAttribute",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Attributes/ReadonlyAttribute',
            title:"ReadonlyAttribute",
            description:""
        }
    );
    a(
        {
            id:5,
            title:"InspectableAttribute",
            content:"InspectableAttribute",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Attributes/InspectableAttribute',
            title:"InspectableAttribute",
            description:""
        }
    );
    a(
        {
            id:6,
            title:"Serialization PropertyReference",
            content:"Serialization PropertyReference",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/PropertyReference',
            title:"Serialization.PropertyReference",
            description:""
        }
    );
    a(
        {
            id:7,
            title:"AutoPrefs EditorBool",
            content:"AutoPrefs EditorBool",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/EditorBool',
            title:"AutoPrefs.EditorBool",
            description:""
        }
    );
    a(
        {
            id:8,
            title:"Serialization ObjectReference",
            content:"Serialization ObjectReference",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/ObjectReference',
            title:"Serialization.ObjectReference",
            description:""
        }
    );
    a(
        {
            id:9,
            title:"LayerAttribute",
            content:"LayerAttribute",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Attributes/LayerAttribute',
            title:"LayerAttribute",
            description:""
        }
    );
    a(
        {
            id:10,
            title:"AutoPrefs EditorVector",
            content:"AutoPrefs EditorVector",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/EditorVector4',
            title:"AutoPrefs.EditorVector4",
            description:""
        }
    );
    a(
        {
            id:11,
            title:"ColorAttribute",
            content:"ColorAttribute",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Attributes/ColorAttribute',
            title:"ColorAttribute",
            description:""
        }
    );
    a(
        {
            id:12,
            title:"AutoPrefs Vector",
            content:"AutoPrefs Vector",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/Vector2',
            title:"AutoPrefs.Vector2",
            description:""
        }
    );
    a(
        {
            id:13,
            title:"AutoPrefs IAutoPref",
            content:"AutoPrefs IAutoPref",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/IAutoPref',
            title:"AutoPrefs.IAutoPref",
            description:""
        }
    );
    a(
        {
            id:14,
            title:"AutoPrefs EditorFloat",
            content:"AutoPrefs EditorFloat",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/EditorFloat',
            title:"AutoPrefs.EditorFloat",
            description:""
        }
    );
    a(
        {
            id:15,
            title:"FloatVisualiserWindow",
            content:"FloatVisualiserWindow",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/FloatVisualiserWindow',
            title:"FloatVisualiserWindow",
            description:""
        }
    );
    a(
        {
            id:16,
            title:"StaticLazyStack",
            content:"StaticLazyStack",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/StaticLazyStack_1',
            title:"StaticLazyStack<T>",
            description:""
        }
    );
    a(
        {
            id:17,
            title:"ToolbarAttribute",
            content:"ToolbarAttribute",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Attributes/ToolbarAttribute',
            title:"ToolbarAttribute",
            description:""
        }
    );
    a(
        {
            id:18,
            title:"Vector VisualiserWindow",
            content:"Vector VisualiserWindow",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/Vector3VisualiserWindow',
            title:"Vector3VisualiserWindow",
            description:""
        }
    );
    a(
        {
            id:19,
            title:"LabelAttribute",
            content:"LabelAttribute",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Attributes/LabelAttribute',
            title:"LabelAttribute",
            description:""
        }
    );
    a(
        {
            id:20,
            title:"RequiredAttribute",
            content:"RequiredAttribute",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Attributes/RequiredAttribute',
            title:"RequiredAttribute",
            description:""
        }
    );
    a(
        {
            id:21,
            title:"CommentComponent",
            content:"CommentComponent",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/CommentComponent',
            title:"CommentComponent",
            description:""
        }
    );
    a(
        {
            id:22,
            title:"DynamicInspector",
            content:"DynamicInspector",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/DynamicInspector',
            title:"DynamicInspector",
            description:""
        }
    );
    a(
        {
            id:23,
            title:"DynamicInspector InspectorModifiers",
            content:"DynamicInspector InspectorModifiers",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/InspectorModifiers',
            title:"DynamicInspector.InspectorModifiers",
            description:""
        }
    );
    a(
        {
            id:24,
            title:"AutoPrefs EditorInt",
            content:"AutoPrefs EditorInt",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/EditorInt',
            title:"AutoPrefs.EditorInt",
            description:""
        }
    );
    a(
        {
            id:25,
            title:"Strings",
            content:"Strings",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/Strings',
            title:"Strings",
            description:""
        }
    );
    a(
        {
            id:26,
            title:"AutoPrefs Vector",
            content:"AutoPrefs Vector",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/Vector4',
            title:"AutoPrefs.Vector4",
            description:""
        }
    );
    a(
        {
            id:27,
            title:"Serialization PropertyAccessor",
            content:"Serialization PropertyAccessor",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/PropertyAccessor',
            title:"Serialization.PropertyAccessor",
            description:""
        }
    );
    a(
        {
            id:28,
            title:"AutoPrefs Quaternion",
            content:"AutoPrefs Quaternion",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/Quaternion',
            title:"AutoPrefs.Quaternion",
            description:""
        }
    );
    a(
        {
            id:29,
            title:"MissingScriptEditor",
            content:"MissingScriptEditor",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/MissingScriptEditor',
            title:"MissingScriptEditor",
            description:""
        }
    );
    a(
        {
            id:30,
            title:"AutoPrefs EditorVector",
            content:"AutoPrefs EditorVector",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/EditorVector2',
            title:"AutoPrefs.EditorVector2",
            description:""
        }
    );
    a(
        {
            id:31,
            title:"Serialization",
            content:"Serialization",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/Serialization',
            title:"Serialization",
            description:""
        }
    );
    a(
        {
            id:32,
            title:"AutoHideUI",
            content:"AutoHideUI",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/AutoHideUI',
            title:"AutoHideUI",
            description:""
        }
    );
    a(
        {
            id:33,
            title:"AutoPrefs AutoPref",
            content:"AutoPrefs AutoPref",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/AutoPref_1',
            title:"AutoPrefs.AutoPref<T>",
            description:""
        }
    );
    a(
        {
            id:34,
            title:"ShowPreviewAttribute",
            content:"ShowPreviewAttribute",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Attributes/ShowPreviewAttribute',
            title:"ShowPreviewAttribute",
            description:""
        }
    );
    a(
        {
            id:35,
            title:"NullableVector",
            content:"NullableVector",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/NullableVector4',
            title:"NullableVector4",
            description:""
        }
    );
    a(
        {
            id:36,
            title:"EditorState",
            content:"EditorState",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/EditorState',
            title:"EditorState",
            description:""
        }
    );
    a(
        {
            id:37,
            title:"AutoPrefs Float",
            content:"AutoPrefs Float",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/Float',
            title:"AutoPrefs.Float",
            description:""
        }
    );
    a(
        {
            id:38,
            title:"Editor",
            content:"Editor",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/Editor_1',
            title:"Editor<T>",
            description:""
        }
    );
    a(
        {
            id:39,
            title:"AutoPrefs EditorVector",
            content:"AutoPrefs EditorVector",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/EditorVector3',
            title:"AutoPrefs.EditorVector3",
            description:""
        }
    );
    a(
        {
            id:40,
            title:"Serialization CollectionPropertyAccessor",
            content:"Serialization CollectionPropertyAccessor",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/CollectionPropertyAccessor',
            title:"Serialization.CollectionPropertyAccessor",
            description:""
        }
    );
    a(
        {
            id:41,
            title:"IComment",
            content:"IComment",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/IComment',
            title:"IComment",
            description:""
        }
    );
    a(
        {
            id:42,
            title:"SceneAttribute",
            content:"SceneAttribute",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Attributes/SceneAttribute',
            title:"SceneAttribute",
            description:""
        }
    );
    a(
        {
            id:43,
            title:"WatcherWindow",
            content:"WatcherWindow",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/WatcherWindow',
            title:"WatcherWindow",
            description:""
        }
    );
    a(
        {
            id:44,
            title:"MinValueAttribute",
            content:"MinValueAttribute",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Attributes/MinValueAttribute',
            title:"MinValueAttribute",
            description:""
        }
    );
    a(
        {
            id:45,
            title:"UniqueCollectionAttribute",
            content:"UniqueCollectionAttribute",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Attributes/UniqueCollectionAttribute',
            title:"UniqueCollectionAttribute",
            description:""
        }
    );
    a(
        {
            id:46,
            title:"AutoPrefs Int",
            content:"AutoPrefs Int",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/Int',
            title:"AutoPrefs.Int",
            description:""
        }
    );
    a(
        {
            id:47,
            title:"CommentAsset",
            content:"CommentAsset",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/CommentAsset',
            title:"CommentAsset",
            description:""
        }
    );
    a(
        {
            id:48,
            title:"MethodCache",
            content:"MethodCache",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/MethodCache',
            title:"MethodCache",
            description:""
        }
    );
    a(
        {
            id:49,
            title:"Strings GUI",
            content:"Strings GUI",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/GUI',
            title:"Strings.GUI",
            description:""
        }
    );
    a(
        {
            id:50,
            title:"CommentEditor",
            content:"CommentEditor",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/CommentEditor',
            title:"CommentEditor",
            description:""
        }
    );
    a(
        {
            id:51,
            title:"EulerAttribute",
            content:"EulerAttribute",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Attributes/EulerAttribute',
            title:"EulerAttribute",
            description:""
        }
    );
    a(
        {
            id:52,
            title:"MethodCache OnPropertyContextMenuMethod",
            content:"MethodCache OnPropertyContextMenuMethod",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/OnPropertyContextMenuMethod',
            title:"MethodCache.OnPropertyContextMenuMethod",
            description:""
        }
    );
    a(
        {
            id:53,
            title:"PersistentValues Operation",
            content:"PersistentValues Operation",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/Operation',
            title:"PersistentValues.Operation",
            description:""
        }
    );
    a(
        {
            id:54,
            title:"PersistentValues",
            content:"PersistentValues",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/PersistentValues',
            title:"PersistentValues",
            description:""
        }
    );
    a(
        {
            id:55,
            title:"Vector VisualiserWindow",
            content:"Vector VisualiserWindow",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/Vector2VisualiserWindow',
            title:"Vector2VisualiserWindow",
            description:""
        }
    );
    a(
        {
            id:56,
            title:"ValidatorAttribute",
            content:"ValidatorAttribute",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Attributes/ValidatorAttribute',
            title:"ValidatorAttribute",
            description:""
        }
    );
    a(
        {
            id:57,
            title:"IGUtils",
            content:"IGUtils",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/IGUtils',
            title:"IGUtils",
            description:""
        }
    );
    a(
        {
            id:58,
            title:"MenuFunctionState",
            content:"MenuFunctionState",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/MenuFunctionState',
            title:"MenuFunctionState",
            description:""
        }
    );
    a(
        {
            id:59,
            title:"PropertyVisualiserWindow",
            content:"PropertyVisualiserWindow",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/PropertyVisualiserWindow',
            title:"PropertyVisualiserWindow",
            description:""
        }
    );
    a(
        {
            id:60,
            title:"ButtonAttribute",
            content:"ButtonAttribute",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Attributes/ButtonAttribute',
            title:"ButtonAttribute",
            description:""
        }
    );
    a(
        {
            id:61,
            title:"ClampValueAttribute",
            content:"ClampValueAttribute",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Attributes/ClampValueAttribute',
            title:"ClampValueAttribute",
            description:""
        }
    );
    a(
        {
            id:62,
            title:"MethodCache",
            content:"MethodCache",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/MethodCache_1',
            title:"MethodCache<TDelegate>",
            description:""
        }
    );
    a(
        {
            id:63,
            title:"SimpleStaticLazyStack",
            content:"SimpleStaticLazyStack",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/SimpleStaticLazyStack_2',
            title:"SimpleStaticLazyStack<TStack, TValue>",
            description:""
        }
    );
    a(
        {
            id:64,
            title:"AutoPrefs EditorQuaternion",
            content:"AutoPrefs EditorQuaternion",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/EditorQuaternion',
            title:"AutoPrefs.EditorQuaternion",
            description:""
        }
    );
    a(
        {
            id:65,
            title:"LabelledCollectionAttribute",
            content:"LabelledCollectionAttribute",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Attributes/LabelledCollectionAttribute',
            title:"LabelledCollectionAttribute",
            description:""
        }
    );
    a(
        {
            id:66,
            title:"HasComponentAttribute",
            content:"HasComponentAttribute",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Attributes/HasComponentAttribute',
            title:"HasComponentAttribute",
            description:""
        }
    );
    a(
        {
            id:67,
            title:"MaxValueAttribute",
            content:"MaxValueAttribute",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Attributes/MaxValueAttribute',
            title:"MaxValueAttribute",
            description:""
        }
    );
    a(
        {
            id:68,
            title:"AutoPrefs AutoPref GUIFieldMethod",
            content:"AutoPrefs AutoPref GUIFieldMethod",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/GUIFieldMethod',
            title:"AutoPrefs.AutoPref<T>.GUIFieldMethod",
            description:""
        }
    );
    a(
        {
            id:69,
            title:"AutoPrefs Bool",
            content:"AutoPrefs Bool",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/Bool',
            title:"AutoPrefs.Bool",
            description:""
        }
    );
    a(
        {
            id:70,
            title:"AutoPrefs Vector",
            content:"AutoPrefs Vector",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/Vector3',
            title:"AutoPrefs.Vector3",
            description:""
        }
    );
    a(
        {
            id:71,
            title:"AutoPrefs",
            content:"AutoPrefs",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/AutoPrefs',
            title:"AutoPrefs",
            description:""
        }
    );
    a(
        {
            id:72,
            title:"DisposableStaticLazyStack",
            content:"DisposableStaticLazyStack",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets/DisposableStaticLazyStack_1',
            title:"DisposableStaticLazyStack<T>",
            description:""
        }
    );
    a(
        {
            id:73,
            title:"IGEditorUtils",
            content:"IGEditorUtils",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Editor/IGEditorUtils',
            title:"IGEditorUtils",
            description:""
        }
    );
    a(
        {
            id:74,
            title:"BaseInspectableAttribute",
            content:"BaseInspectableAttribute",
            description:'',
            tags:''
        },
        {
            url:'/inspector-gadgets/api/InspectorGadgets.Attributes/BaseInspectableAttribute',
            title:"BaseInspectableAttribute",
            description:""
        }
    );
    var idx = lunr(function() {
        this.field('title');
        this.field('content');
        this.field('description');
        this.field('tags');
        this.ref('id');
        this.use(camelCaseTokenizer);

        this.pipeline.remove(lunr.stopWordFilter);
        this.pipeline.remove(lunr.stemmer);
        documents.forEach(function (doc) { this.add(doc) }, this)
    });

    return {
        search: function(q) {
            return idx.search(q).map(function(i) {
                return idMap[i.ref];
            });
        }
    };
}();
