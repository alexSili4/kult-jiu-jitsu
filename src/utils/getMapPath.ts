import { IPoint } from '@/types/contacts';

const parsePercent = (
  value: string | undefined,
  size: number,
  invert = false
) => {
  if (!value) return null;
  const num = parseFloat(value);
  return invert ? size * (1 - num / 100) : (num / 100) * size;
};

const getXY = (point: IPoint, width: number, height: number) => {
  let x = 0;
  let y = 0;

  if (point.left) x = parsePercent(point.left, width)!;
  else if (point.right) x = parsePercent(point.right, width, true)!;

  if (point.top) y = parsePercent(point.top, height)!;
  else if (point.bottom) y = parsePercent(point.bottom, height, true)!;

  return { x, y };
};

const vecFrom = (a: any, b: any) => ({ x: b.x - a.x, y: b.y - a.y });

const vecLen = (v: any) => Math.hypot(v.x, v.y);

const vecNorm = (v: any) => {
  const L = vecLen(v) || 1;
  return { x: v.x / L, y: v.y / L };
};

const vecScale = (v: any, s: number) => ({ x: v.x * s, y: v.y * s });

const vecAdd = (a: any, b: any) => ({ x: a.x + b.x, y: a.y + b.y });

const getMapPath = (
  points: IPoint[],
  width: number,
  height: number,
  radius: number
) => {
  if (!points.length) return '';

  const pts = points.map((p) => getXY(p, width, height));
  if (pts.length === 1) return `M ${pts[0].x} ${pts[0].y}`;

  let d = `M ${pts[0].x} ${pts[0].y}`;

  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1];
    const curr = pts[i];
    const next = pts[i + 1];

    if (!next) {
      d += ` L ${curr.x} ${curr.y}`;
      break;
    }

    const v1 = vecFrom(prev, curr);
    const v2 = vecFrom(curr, next);
    const len1 = vecLen(v1);
    const len2 = vecLen(v2);

    if (len1 < 1e-6 || len2 < 1e-6) {
      d += ` L ${curr.x} ${curr.y}`;
      continue;
    }

    const n1 = vecNorm(v1);
    const n2 = vecNorm(v2);
    const cut1 = Math.min(radius, len1 / 2);
    const cut2 = Math.min(radius, len2 / 2);

    const p1 = vecAdd(curr, vecScale(n1, -cut1));
    const p2 = vecAdd(curr, vecScale(n2, cut2));

    d += ` L ${p1.x} ${p1.y}`;
    d += ` Q ${curr.x} ${curr.y} ${p2.x} ${p2.y}`;
  }

  const last = pts[pts.length - 1];
  d += ` L ${last.x} ${last.y}`;
  return d;
};

export default getMapPath;
