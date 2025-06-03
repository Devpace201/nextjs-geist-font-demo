(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/game/constants.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BULLET_DAMAGE": (()=>BULLET_DAMAGE),
    "BULLET_HEIGHT": (()=>BULLET_HEIGHT),
    "BULLET_SPEED": (()=>BULLET_SPEED),
    "BULLET_WIDTH": (()=>BULLET_WIDTH),
    "COLLISION_DAMAGE": (()=>COLLISION_DAMAGE),
    "COLORS": (()=>COLORS),
    "ENEMY_HEIGHT": (()=>ENEMY_HEIGHT),
    "ENEMY_SPAWN_INTERVAL": (()=>ENEMY_SPAWN_INTERVAL),
    "ENEMY_SPEED": (()=>ENEMY_SPEED),
    "ENEMY_WIDTH": (()=>ENEMY_WIDTH),
    "GAME_HEIGHT": (()=>GAME_HEIGHT),
    "GAME_WIDTH": (()=>GAME_WIDTH),
    "PLAYER_HEIGHT": (()=>PLAYER_HEIGHT),
    "PLAYER_SPEED": (()=>PLAYER_SPEED),
    "PLAYER_WIDTH": (()=>PLAYER_WIDTH),
    "SCORE_PER_KILL": (()=>SCORE_PER_KILL)
});
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const PLAYER_WIDTH = 40;
const PLAYER_HEIGHT = 40;
const PLAYER_SPEED = 5;
const BULLET_WIDTH = 4;
const BULLET_HEIGHT = 10;
const BULLET_SPEED = 7;
const ENEMY_WIDTH = 30;
const ENEMY_HEIGHT = 30;
const ENEMY_SPEED = 2;
const ENEMY_SPAWN_INTERVAL = 2000 // ms
;
const COLLISION_DAMAGE = 10;
const BULLET_DAMAGE = 20;
const SCORE_PER_KILL = 100;
const COLORS = {
    PLAYER: '#00ff00',
    ENEMY: '#ff0000',
    BULLET: '#ffffff',
    EXPLOSION: '#ffff00'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/game/entities.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Bullet": (()=>Bullet),
    "Enemy": (()=>Enemy),
    "Entity": (()=>Entity),
    "Explosion": (()=>Explosion),
    "Player": (()=>Player)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game/constants.ts [app-client] (ecmascript)");
;
class Entity {
    x;
    y;
    width;
    height;
    color;
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    collidesWith(other) {
        return this.x < other.x + other.width && this.x + this.width > other.x && this.y < other.y + other.height && this.y + this.height > other.y;
    }
}
class Player extends Entity {
    constructor(){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_WIDTH"] / 2 - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAYER_WIDTH"] / 2, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_HEIGHT"] - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAYER_HEIGHT"] - 10, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAYER_WIDTH"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAYER_HEIGHT"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PLAYER);
    }
    moveLeft() {
        this.x = Math.max(0, this.x - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAYER_SPEED"]);
    }
    moveRight() {
        this.x = Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_WIDTH"] - this.width, this.x + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAYER_SPEED"]);
    }
    shoot() {
        return new Bullet(this.x + this.width / 2 - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BULLET_WIDTH"] / 2, this.y);
    }
}
class Enemy extends Entity {
    constructor(){
        super(Math.random() * (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_WIDTH"] - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENEMY_WIDTH"]), -__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENEMY_HEIGHT"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENEMY_WIDTH"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENEMY_HEIGHT"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].ENEMY);
    }
    update() {
        this.y += __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENEMY_SPEED"];
        return this.y > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_HEIGHT"];
    }
}
class Bullet extends Entity {
    constructor(x, y){
        super(x, y, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BULLET_WIDTH"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BULLET_HEIGHT"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BULLET);
    }
    update() {
        this.y -= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BULLET_SPEED"];
        return this.y + this.height < 0;
    }
}
class Explosion extends Entity {
    lifetime = 20;
    currentFrame = 0;
    constructor(x, y){
        super(x, y, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENEMY_WIDTH"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENEMY_HEIGHT"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].EXPLOSION);
    }
    update() {
        this.currentFrame++;
        return this.currentFrame >= this.lifetime;
    }
    draw(ctx) {
        const alpha = 1 - this.currentFrame / this.lifetime;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = alpha;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.globalAlpha = 1;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/game/engine.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "initGame": (()=>initGame)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$entities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game/entities.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game/constants.ts [app-client] (ecmascript)");
;
;
function initGame(canvas, onGameOver, onScoreUpdate) {
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Could not get 2D context from canvas');
        return ()=>{};
    }
    let score = 0;
    let isGameOver = false;
    let lastEnemySpawn = 0;
    const player = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$entities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Player"]();
    const enemies = [];
    const bullets = [];
    const explosions = [];
    const keys = {
        ArrowLeft: false,
        ArrowRight: false,
        Space: false,
        lastShot: 0
    };
    function handleKeyDown(e) {
        if (e.code === 'ArrowLeft') keys.ArrowLeft = true;
        if (e.code === 'ArrowRight') keys.ArrowRight = true;
        if (e.code === 'Space') keys.Space = true;
    }
    function handleKeyUp(e) {
        if (e.code === 'ArrowLeft') keys.ArrowLeft = false;
        if (e.code === 'ArrowRight') keys.ArrowRight = false;
        if (e.code === 'Space') keys.Space = false;
    }
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    function spawnEnemy(timestamp) {
        if (timestamp - lastEnemySpawn > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENEMY_SPAWN_INTERVAL"]) {
            enemies.push(new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$entities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Enemy"]());
            lastEnemySpawn = timestamp;
        }
    }
    function updatePlayer() {
        if (keys.ArrowLeft) player.moveLeft();
        if (keys.ArrowRight) player.moveRight();
        if (keys.Space && Date.now() - keys.lastShot > 250) {
            bullets.push(player.shoot());
            keys.lastShot = Date.now();
        }
    }
    function updateEntities() {
        // Update bullets
        for(let i = bullets.length - 1; i >= 0; i--){
            if (bullets[i].update()) {
                bullets.splice(i, 1);
            }
        }
        // Update enemies
        for(let i = enemies.length - 1; i >= 0; i--){
            if (enemies[i].update()) {
                enemies.splice(i, 1);
                isGameOver = true;
            }
        }
        // Update explosions
        for(let i = explosions.length - 1; i >= 0; i--){
            if (explosions[i].update()) {
                explosions.splice(i, 1);
            }
        }
    }
    function checkCollisions() {
        // Check bullet-enemy collisions
        for(let i = bullets.length - 1; i >= 0; i--){
            for(let j = enemies.length - 1; j >= 0; j--){
                if (bullets[i] && enemies[j] && bullets[i].collidesWith(enemies[j])) {
                    explosions.push(new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$entities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Explosion"](enemies[j].x, enemies[j].y));
                    bullets.splice(i, 1);
                    enemies.splice(j, 1);
                    score += __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCORE_PER_KILL"];
                    onScoreUpdate(score);
                    break;
                }
            }
        }
        // Check player-enemy collisions
        for(let i = enemies.length - 1; i >= 0; i--){
            if (player.collidesWith(enemies[i])) {
                isGameOver = true;
                break;
            }
        }
    }
    function draw() {
        if (!ctx) return;
        // Clear canvas
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_WIDTH"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_HEIGHT"]);
        // Draw game entities
        player.draw(ctx);
        bullets.forEach((bullet)=>bullet.draw(ctx));
        enemies.forEach((enemy)=>enemy.draw(ctx));
        explosions.forEach((explosion)=>explosion.draw(ctx));
    }
    function gameLoop(timestamp) {
        if (isGameOver) {
            onGameOver(score);
            return;
        }
        spawnEnemy(timestamp);
        updatePlayer();
        updateEntities();
        checkCollisions();
        draw();
        requestAnimationFrame(gameLoop);
    }
    requestAnimationFrame(gameLoop);
    // Cleanup function
    return ()=>{
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
        isGameOver = true;
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/game/Canvas.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GameCanvas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game/engine.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function GameCanvas({ onGameOver, onScoreUpdate }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameCanvas.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const cleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initGame"])(canvas, onGameOver, onScoreUpdate);
            return cleanup;
        }
    }["GameCanvas.useEffect"], [
        onGameOver,
        onScoreUpdate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        width: 800,
        height: 600,
        className: "bg-black rounded-lg"
    }, void 0, false, {
        fileName: "[project]/src/components/game/Canvas.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(GameCanvas, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = GameCanvas;
var _c;
__turbopack_context__.k.register(_c, "GameCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/game/GameOver.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GameOver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
'use client';
;
;
function GameOver({ score, onRestart }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-white mb-4",
                children: "Game Over"
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameOver.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl text-gray-300 mb-6",
                children: [
                    "Final Score: ",
                    score
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/GameOver.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: onRestart,
                variant: "secondary",
                children: "Play Again"
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameOver.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/GameOver.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = GameOver;
var _c;
__turbopack_context__.k.register(_c, "GameOver");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/game/Score.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Score)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function Score({ score }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-xl font-bold text-white mb-4",
        children: [
            "Score: ",
            score
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/Score.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Score;
var _c;
__turbopack_context__.k.register(_c, "Score");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/game/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GamePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/Canvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$GameOver$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/GameOver.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Score$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/Score.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function GamePage() {
    _s();
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isGameOver, setIsGameOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleGameOver = (finalScore)=>{
        setScore(finalScore);
        setIsGameOver(true);
    };
    const handleRestart = ()=>{
        setScore(0);
        setIsGameOver(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black p-4 flex flex-col items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold text-white mb-4",
                children: "Space Shooter"
            }, void 0, false, {
                fileName: "[project]/src/app/game/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "p-4 bg-gray-900 border-gray-800",
                children: !isGameOver ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Score$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            score: score
                        }, void 0, false, {
                            fileName: "[project]/src/app/game/page.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onGameOver: handleGameOver,
                            onScoreUpdate: setScore
                        }, void 0, false, {
                            fileName: "[project]/src/app/game/page.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$GameOver$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    score: score,
                    onRestart: handleRestart
                }, void 0, false, {
                    fileName: "[project]/src/app/game/page.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/game/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 text-gray-400 text-sm",
                children: "Use arrow keys to move and spacebar to shoot"
            }, void 0, false, {
                fileName: "[project]/src/app/game/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/game/page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(GamePage, "oP3WjgzZzU9O2bJDanXD6dr8k5w=");
_c = GamePage;
var _c;
__turbopack_context__.k.register(_c, "GamePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_77ede278._.js.map