pnpm 多项目管理实践

* 根目录新建 pnpm-workspace.yaml 

```yaml
packages:
  + 'packages/*'
  + '!**/test/**'
```
