import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: "web_app_clone_manager_two",
  title: "web_app_clone_manger",
  projectId: "tal4o5i4",
  dataset: "production",
  basePath: "/test",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});